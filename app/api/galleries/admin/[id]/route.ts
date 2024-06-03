import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import path from 'path';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    const supabase = createClient();
    const { data: gallery, error } = await supabase.from('galleries').select("*").eq('name', id).single();
    return NextResponse.json({ gallery });
}



export async function PUT(
    request: Request,
    { params }: { params: { id: string } }){

    const supabase = createClient();
    const formData = await request.formData();
    const tags = JSON.parse(formData.getAll('tags').toString()) as string[];
    const originalName = formData.get('originalName');
    const name = formData.get('name')?.toString();
    const nsfw = formData.get('nsfw')?.toString();
    const tier = formData.get('tier')?.toString();
    const thumbnail = formData.get('thumbnail');

    console.log(tier)
    const { error } = await supabase.from('galleries').update({name, tags, nsfw, tier, thumbnail_file:thumbnail}).eq('name', originalName ?? '');
    
    async function renameFolder(oldFolderName: any, newFolderName: string) {
        // Get a list of all files in the old folder
        let { data: oldFiles, error } = await supabase.storage.from('galleries').list(oldFolderName);
        if (error) {
            console.error('Error fetching files:', error);
            return;
        }
    
        // Move each file to the new folder
        if (oldFiles) {
            for (let file of oldFiles) {
                let oldPath = file.name;
                let newPath = newFolderName + '/' + oldPath.split('/').pop();

                let { error: moveError } = await supabase.storage.from('galleries').move(oldPath, newPath);
                if (moveError) {
                    console.error(`Error moving file ${oldPath} to ${newPath}:`, moveError);
                }
            }
        }

        // Delete the old folder
        let { error: deleteError } = await supabase.storage.from('galleries').remove([oldFolderName]);
        if (deleteError) {
            console.error('Error deleting old folder:', deleteError);
        }
    }

    renameFolder(originalName, name ?? '');

    if(error){
        return NextResponse.error();
    }
    let { data: galleries, error:galleriesError } = await supabase
    .from('galleries')
    .select('*');
    return NextResponse.json({ success: true, galleries });
}


export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id =params.id;
    const supabase = createClient();
    const { data: gallery, error } = await supabase.from('galleries').delete().eq('name', id).single();
    let { data: galleries, error:galleriesError } = await supabase
    .from('galleries')
    .select('*');
    return NextResponse.json({ success: true, galleries });
}

// const tagsResponse = await fetch(`/api/galleries/tags?search=${search}`);
// const tagsData = await tagsResponse.json();
// const galleriesWithTagData = galleriesData.map((gallery: any) => {
//   const tags = tagsData.filter((tag: any) => gallery.tags.includes(tag.name));
//   return { ...gallery, tags };
// });

   
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('tags', JSON.stringify(tags));
    // files.forEach((file: File) => {
    //     formData.append('files', file);
    // });

    // const response = await fetch('/api/galleries', {
    //     method: 'POST',
    //     body: formData,
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     // Handle success
    // } else {
    //     // Handle error
    // }