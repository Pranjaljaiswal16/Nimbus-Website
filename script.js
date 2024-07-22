const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)

    fetch("url", {
        method: "POST",
        body: formData
    }).then(res => {
        console.log(res,"---------res");
    }).catch(err => {
        console.log(err);
    })
}