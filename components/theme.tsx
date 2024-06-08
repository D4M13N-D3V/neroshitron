
"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

interface GalleryThumbnailProps {}

const ThemeProvider = ({}: GalleryThumbnailProps) => {
  const [data, setData] = useState<any[]>([]); // State to store the fetched data

  const getData = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.from('interface_configurations').select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setData(data || []);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Update variables when data changes
    for (const config of data) {
      if (config.type === 'color') {
        document.documentElement.style.setProperty(`--color-${config.name}`, config.value);
      }
    }
  }, [data]);

  return <></>;
};

export default ThemeProvider;