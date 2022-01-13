function navbar()
{
    return ` <div id="navBar">
    <div class="logo">
     <a href="index.html"> <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4
        " alt=""></a>
    </div>
    <div id="search">
      <input type="text" name="" id="search-box" placeholder="Search GitHub">
   </div>
      <div id="option">
          <a href=""><ul id="list"></ul></a>
          <a href=""><li>Pull Requseted</li></a>
          <a href=""><li>Issues</li></a>
          <a href=""><li>Marketplace</li></a>
         <a href="explore.html"> <li>Explore</li></a>
      </div>
   <div id="profile">
     <a href="">+</a>
    <img id="profile_img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
   </div>
</div>`
}
export default navbar