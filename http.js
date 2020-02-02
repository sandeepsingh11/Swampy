import axios from "axios";

document.getElementById("submit").addEventListener("submit", post);

async function post() {
    try {
      const response = await axios.post('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

const main = async () => {
    post();
}

main();