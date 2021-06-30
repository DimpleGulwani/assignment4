const axios = require("axios").default;


export const getPosts = async (request, response) => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          return response;
        } catch (error) {
          console.error(error);
        }
      
}

export const getPosts = async (request, response) => {
  try {
    const id = request.params.id;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  } catch (error) {
    console.error(error);
  }

}