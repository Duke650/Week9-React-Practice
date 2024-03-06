import { useState } from "react"

const UpdateName = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
     })

    const handleClick = () => {
        setGame(prev => ({
            ...prev,
            player: {...prev.player, name: "Mike"}
        }))
    }

    return (
        <div onClick={handleClick}>
            {game.player.name}
        </div>
    )
}
export default UpdateName