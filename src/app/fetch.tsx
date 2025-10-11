import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RenderPost } from "../components/post";
import { useFetch } from "../hooks/useFetch";
import { cardStyle } from "../styles/card.style";
import { Post } from "../types/post.type";

export default function Index() {

  const [posts, setPosts] = useState<Post[]>([]);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const { findAll, create } = useFetch()

  const loadPosts = async () => {

    const response = await findAll();

    if (response && response.posts) {
      setPosts(response.posts);
    }

  }

  const save = async () => {

    const newPost: Omit<Post, 'id'> = {
      title: titulo,
      body: descricao,
      tags: [],
      userId: 12,
      views: 1
    }

    try{
      await create(newPost)
      setPosts([])

      setTimeout(async () => {
        await loadPosts()
      }, 3000)

    } catch(e) {
      Alert.alert('Erro ao salvar', (e as Error).message)
    }

  }

  useEffect(() => {
    loadPosts()
  }, []);

  return (
    <View style={{ padding: 15 }}>

      <View style={cardStyle.card}>
        <Text>Esta tela é usada para fazer REQS HTTP</Text>
      </View>

      <View style={[cardStyle.card, {marginTop: 10, gap: 10}]}>
        
        <View style={estilo.grupoInput}>
          <Text style={estilo.labelInput}>Título:</Text>
          <TextInput 
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Informe o título"/>
        </View>

        <View style={estilo.grupoInput}>
          <Text style={estilo.labelInput}>Descrição:</Text>
          <TextInput
          value={descricao}
          onChangeText={setDescricao} 
          placeholder="Informe a descrição"/>
        </View>

        <TouchableOpacity style={estilo.botao} onPress={save}>
          <Text style={estilo.txtBotao}>Salvar</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        style={{ marginTop: 15 }}
        data={posts}
        keyExtractor={(post) => `${post.id}`}
        renderItem={({ item }) =>
        <RenderPost post={item} /> 
        }
      />

    </View>
  );
}

const estilo = StyleSheet.create({

  grupoInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },

  labelInput: {
    fontWeight: "bold",
    color: "#000"
  },

  botao: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "green",
    borderRadius: 5,
    alignItems: "center"
  },

  txtBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }

})