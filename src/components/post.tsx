import { Text, View } from "react-native"
import { boxStyle } from "../styles/box.style"
import { Post } from "../types/post.type"

interface RenderPostProps {
    post: Post
}

export const RenderPost = ({post} : RenderPostProps) => {

    return <View style={boxStyle.box}>

        <Text style={{color: "#fff"}}>{post.title}</Text>

    </View>

}