function Story({img,username}) {
    return (
        <div>
            <img src={img} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-400 border-2"/>
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story
