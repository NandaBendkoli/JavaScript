const api_url = "https://api.restful-api.dev/objects";

async function handlePromise() {
  const data = await fetch(api_url);
  const jsonValue = await data.json();
  console.log(jsonValue);
}
handlePromise();

//! the fetch it return an promise so we have to used the await but it return response object so this is prmoise
//! and then convert that response onject into json object we do resposne.json() and this also return a promise so we have to use await again to get the json value and then we can log it in console.
//! the fetch() method is used to make an API call to the specified URL (api_url) and returns a Promise that resolves to the Response object representing the response to the request.
//! The await keyword is used to wait for the Promise returned by fetch() to resolve, and once it does, the resulting Response object is stored in the data variable.

