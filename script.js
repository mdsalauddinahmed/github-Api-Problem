const loadGithubUsers =()=>{
   fetch(`https://api.github.com/users?per_page=10`)
   .then(res=>res.json())
   .then(data=>displayUser(data))
}
const displayUser=(data)=>{
    // console.log(data)
 
  data.forEach((user)=>{
    displayFollowers(user)
  })
  
}
const displayFollowers =(item)=>{
    const Container= document.getElementById('user_container');
    //  console.log(item )
    fetch(item.followers_url)
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
         const div =document.createElement('div')
         div.classList.add('card')
         div.innerHTML=` 
         <img class="card_img" src=${item.avatar_url} alt="">
         <h4>${item.login}</h4>
         <p>Follower_
         <img class="card_img2" src=${result[0].avatar_url} alt="">
         <img class="card_img2" src=${result[1].avatar_url} alt="">
         </p>`
         Container.appendChild(div)
    })
}