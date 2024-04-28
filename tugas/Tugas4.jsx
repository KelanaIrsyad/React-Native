import { useState } from "react"
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";


const Task = ({task, done, onRemove, id}) => {

  

  return (
    <View >
      <TouchableOpacity style={[{
      flexDirection: "row", 
      paddingHorizontal: 20,
      paddingVertical: 16,
      justifyContent: "space-between"
    }]} onPress={() => onRemove(id)}>
        <Text style={{fontSize: 20, fontWeight: "800"}}>{task}</Text>
        {done && (
          <Image 
            style={{width: 32, height: 32 }}
            source={{uri: 'https://icons.iconarchive.com/icons/jackietran/rounded/32/Done-icon.png'}} 
          />
        )}
        {!done && (
          <Image 
            style={{width: 32, height: 32 }}
            source={{uri: 'https://icons.iconarchive.com/icons/jackietran/rounded/32/Pause-icon.png'}} 
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

export const Tugas4 = () => {
  const [data, setData] = useState({
    id: new Date().getTime(),
    task: "",
    done: false,
  });

  const [listTask, setListTask] = useState([]);

  const onAdd = () => {
    setListTask((value) => ([...value, data]));

    setData({
      id: new Date().getTime(),
      task: "",
      done: false,
    });
  }

  const onRemove = (id) => {
    const foundIndex = listTask.map(e => e.id).indexOf(id)

    const listTaskCopy = [...listTask];
    listTaskCopy.splice(foundIndex, 1);
    setListTask(listTaskCopy);
  }

  const onTampilPesan = () => {
    Alert.alert("Pesan", JSON.stringify(data))
  }
  


  return (
    <>
      <SafeAreaView style={styles.fluid}>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.title}>Tugas 04</Text>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-end' }}>
            <View style={[styles.formGroup, {flex: 2}]}>
              <Text style={styles.formLabel}>Task</Text>
              <TextInput 
                value={data.task}
                onChangeText={(value) => setData((values) => ({...values, task: value}))}
                style={styles.formControl} 
              />
            </View>
            
            <TouchableOpacity onPress={onAdd} style={styles.buttonPrimary}>
              <Text style={styles.buttonTextPrimary}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={listTask}
          renderItem={({item}) => <Task task={item.task} done={item.done} onRemove={onRemove} id={item.id} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    formGroup: {
        gap: 8
      },
      formLabel: {
        fontSize: 20,
        color: "#4E4E4E"
      },
      formControl: {
        backgroundColor: "#fff",
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 8,
        color: "#0d1b2a",
        borderColor: "#4E4E4E",
        borderWidth: 0.3,
        borderRadius:4
      },
      buttonPrimary: {
        backgroundColor: "#262262",
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 4
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#000814",
      },
      content: {
        fontSize: 16,
        color: "#4a4e69"
      },
      buttonTextPrimary: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        fontWeight: "700"
      },
      fluid: {
        marginVertical: 24,
        gap: 16
      }, 
      container: {
        marginVertical: 24,
        marginHorizontal: 50,
        gap: 32,
        flex: 1
      },
})
