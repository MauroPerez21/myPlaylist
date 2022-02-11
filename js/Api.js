export default class Api{   
    static msg(){
        console.log("Hello, World")
    }
    static getAllSongs(){
        const list = JSON.parse(localStorage.getItem("myPlaylist")||"[]")
        return list
    }
    static _createList(root){
        console.log(root)
        const list = Api.getAllSongs()
        const MAX_LENGTH = 10
        function myString(mySong){
            mySong.substring(0,MAX_LENGTH)
            (mySong.length > MAX_LENGTH)?  "...":""
            
        }
        list.map(x=>{
            root.innerHTML +=  
            '<tr><td class="capitalize" data-label="id"><input type="button" class="button-play" onclick="play('+`${x.id}`+')" value="play"/></td>'+
            '<td class="capitalize" data-label="song">'+
            x.song
            +'</td>'+
            '<td class="capitalize" data-label="artist">'+x.author+'</td>'+
            '<td class="capitalize" data-label="album">'+x.album+'</td>'+
            '<td class="capitalize" data-label="duration">'+x.duration+'</td>'+
            '<td class="capitalize" data-label="update"><a onclick="reset('+`${x.id}`+')">update</a></td>'+
            '<td class="capitalize" data-label="delete"><a onclick="trash('+`${x.id}`+')">delete</a></td></tr>'        
        })
    }
    static saveOne(newSong){
        const songs = Api.getAllSongs()
        console.table(newSong)
        songs.push(newSong)
        localStorage.setItem("myPlaylist",JSON.stringify(songs))
        console.log(newSong.song+'\t'+"saved!")
    }
    static trashOne(refValue, list){
        const restore = list.filter(s => s.id != refValue)
        localStorage.setItem("myPlaylist", JSON.stringify(restore)) 
    }
    static updateOne(refValue){
        console.log("updated with date!")
    }
}
