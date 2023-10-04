Official Resource: https://github.com/axios/axios#config-defaults

### Interceptors
- Interceptors intercept requests or responses before they are handled by `then` or `catch`.

### Error Types
The general structure of axios errors is as follows:
- message
- name
- stack
- config
- code
- status 

### Handling Errors
The default behavior is to reject every response that returns with a status that **falls out of the range 2xx and treat it as an error.**

```
axios.get('/user/123456')
    .catch((error) => {
        if (error.response) {
            error.response.data;
            error.response.status;
            error.response.headers;
        }

        else if (error.request) {

        }

        else {
            console.log('Error', error.message);
        }

        error.config;
    })
```

### Cancelation
#### AbortController
```
const controller = new AbortController();

axios.get('/foo/bar', {
    signal: controller.signal
}).then(response => {

});

controller.abort();
```

### Using `application/x-www-form-urlencoded` format
#### URLSearchParams
- By default, axios serializes JS objects to `JSON`.
- To send data in the `application/x-www-form-urlencoded` format, you can use the `URLSearchParams` API
```
const param = new URLSearchParams({foo: 'bar'});
param.append('extraparam', 'value');
axios.post('/foo', params);
```
#### 🆕 Automatic serialization to URLSearchParams
- Axios will automatically serialize the data object to urlencoded format if the content-type header is set to `application/x-www-form-urlencoded`.
```
const data = {
    x: 1,
    y: 2,
    name: {
        'surname': 'Parker',
        'firstname': 'Peter'
    }
};

await axios.postForm('https://postman-echo.com/post', data,
    {headers: {'content-type': 'application/x-www-urlencoded'}}
);
```

### Using `multipart/form-data` format
```
var form = new FormData();
```
### File Posting
#### Submit single file
```
await axios.postForm(link, {
    'myVar': 'foo',
    'file': document.querySelector('#fileInput').files[0]
})
```
### Submit multiple files as `multiple/form-data`
```
await axios.postForm(link, {
    'files[]': document.querySelector('#fileInput').files
});
```
or
```
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```
### TypeScript
```
let user: User = null;
try {
  const { data } = await axios.get('/user?ID=12345');
  user = data.userDetails;
} catch (error) {
  if (axios.isAxiosError(error)) {
    handleAxiosError(error);
  } else {
    handleUnexpectedError(error);
  }
}
```