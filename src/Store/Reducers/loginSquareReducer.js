const initState={
    squares:[
    {id:0, pic:"./media/login-media/wow.jpg", logoPic:"./media/login-media/wowbfalogo.png", name:"World of Warcraft", link:"WoW",sqColor:""},
    {id:1, pic:"./media/login-media/lol.jpg", logoPic:"./media/login-media/lollogo.png", name:"", link:"",sqColor:""},
    {id:2, pic:"./media/login-media/mtga.jpg", logoPic:"./media/login-media/mtgalogo.png", name:"", link:"",sqColor:""},
    {id:3, pic:"./media/login-media/fortnite.jpg", logoPic:"./media/login-media/fortnitelogo.png", name:"", link:"",sqColor:""},
    {id:4, pic:"./media/login-media/hs.jpg", logoPic:"./media/login-media/hslogo.png", name:"", link:"",sqColor:""},
    {id:5, pic:"./media/login-media/apex.jpg", logoPic:"./media/login-media/apexlogo.png", name:"", link:"",sqColor:""},
    {id:6, pic:"./media/login-media/dota2.jpg", logoPic:"./media/login-media/dota2logo.png", name:"", link:"",sqColor:""},
    {id:7, pic:"./media/login-media/overwatch.jpg", logoPic:"./media/login-media/overwatchlogo.png", name:"", link:"",sqColor:""},
    {id:8, pic:"./media/login-media/tft.jpeg", logoPic:"./media/login-media/tftlogo.png", name:"", link:"",sqColor:""},
    {id:9, pic:"./media/login-media/classicwow.jpg", logoPic:"./media/login-media/wowlogo.png", name:"", link:"",sqColor:""}
    ]
}

const loginSquareReducer=(state=initState, action)=>{
    return state;
}

export default loginSquareReducer