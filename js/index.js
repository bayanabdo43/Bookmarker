var websiteName = document.getElementById("floatingInputGroup2");
var websiteUrl = document.getElementById("floatingInputGroup");
var websitelist =[];
var regex={
    floatingInputGroup2:/.{3}/,
    floatingInputGroup:/.\.(com){1}$/
} 

if (localStorage.getItem("websitelist")!=null){
    websitelist = JSON.parse(localStorage.getItem("websitelist"));
    displayWebsite(websitelist)
}

function addWebsite(){
    var website = {
        name :websiteName.value,
        url : websiteUrl.value
    }
    websitelist.push(website);
    localStorage.setItem("websitelist",JSON.stringify(websitelist))
    displayWebsite(websitelist);
    clear()
}
function displayWebsite(list){
    var cartona =``
    for (var i =0 ; i<list.length;i++){
        cartona+=`<tr>
                    <td class="border-top">${i+1}</td>
                    <td class="border-top">${list[i].name}</td>
                    <td class="p-3 border-top"><a class="btn btn-success" href="${list[i].url}"><i class="fa-solid fa-eye"></i> Visit</a></td>
                    <td class="p-3 border-top"><a onclick="deleteURL(${i})" class="btn btn-danger" href=""><i class="fa-solid fa-trash-can"></i> Delete</a></td>
                </tr>`
    }
    document.getElementById("myData").innerHTML = cartona
}
function clear(){
    websiteName.value = null ;
    websiteUrl.value = null ;
}
function deleteURL(x){
    websitelist.splice(x,1);
    localStorage.setItem("websitelist",JSON.stringify(websitelist))
    displayWebsite(websitelist);
    
}

function validSiteName(element){
    if (regex[element.id].test(element.value)==true){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid")
    }else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid")
    }
}

// function close(){
//     element.classList.add("visually-hidden")
// }