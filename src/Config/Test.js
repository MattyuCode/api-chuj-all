console.log("Welcome");

const username = "Mattyu3",
  password = "12345";

const fetch1 = async () => {
  try {
    const response = await fetch("http://localhost:3434/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: username,
        password: password,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
    } else {
      let data = await response.json();
      const datos = data.data;
      const isTokens = data.data;

      // console.log(datos.token);
       console.log(datos.user.user);
      // console.log(data.data.token);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};

fetch1();
