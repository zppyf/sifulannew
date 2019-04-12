class List{
    constructor(options){
       this.cont = options.cont;
       this.url = options.url;
       this.load();
       this.addEvent();
     }
     load(){
         var that=this;
         ajax({
             url:this.url,
             success:function(res){
                 that.res = JSON.parse(res)
                //  console.log(res)
                 that.display();
             }
         })
     }
     display(){
         console.log(this.res)
         var str="";
         for(var i=0;i<this.res.length;i++){
             str +=`<div class="box" index="${this.res[i].goodsId}">
                        <span>${this.res[i].name}</span>
                        <span>${this.res[i].title}</span>
                        <span>${this.res[i].price}</span>
                        <a href="${this.res[i].url}"><img src="${this.res[i].src}"></a>
                        <em>加入购物车</em>
                     </div>`;
         }
         this.cont.innerHTML = str;
     }
     addEvent(){
         var that = this;
         this.cont.addEventListener("click",function(eve){
             if(eve.target.nodeName == "EM"){
                 that.id=eve.target.parentNode.getAttribute("index");
                that.setCookie();
             }
         })
     }
     setCookie(){
         this.goods = getCookie("goods");
         if(this.goods == ""){
               this.goods = [{
                   id:this.id,
                   num:1
               }];   
         }else{
             this.goods = JSON.parse(this.goods);
             var onoff=true;
             this.goods.forEach((v)=>{
                 if(v.id == this.id){
                      v.num++;
                      onoff = false;
                 }
             })
             if(onoff){
                 this.goods.push({
                     id:this.id,
                     num:1
                 })
             }
         }
         setCookie("goods",JSON.stringify(this.goods))
     }
}
new List({
    cont:document.getElementById("cont"),
    url:"http://localhost/sifulan/data/goods.json"
})