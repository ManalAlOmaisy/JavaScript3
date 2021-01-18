//Module 1

export async function fetchtRepositorylist(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
      }
}