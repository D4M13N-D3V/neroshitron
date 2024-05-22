export default async function handler(req, res): Promise<any>  {
    let jsonString = generateRandomStringsAndJsonify(10, 5);
    res.status(200).json(jsonString);

}
function generateRandomStringsAndJsonify(length, stringLength) {
    let result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        let randomString = '';
        for (let j = 0; j < stringLength; j++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        result.push(randomString);
    }

    return JSON.stringify(result);
}
