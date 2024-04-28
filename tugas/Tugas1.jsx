import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Tugas1 = ({ navigation }) => {
  const [input, setInput] = useState({
    nama: "",
    gender: "",
    batch: "",
  });

  const Pesan = () => {
    alert(`Nama ${input.nama}, gender ${input.gender}, batch ${input.batch}`);
    };
   

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.judul}>Tugas 1</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Nama</Text>
        <TextInput
          style={styles.formControl}
          value={input.nama}
          onChangeText={(text) =>
            setInput((value) => ({ ...value, nama: text }))
          }
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Jenis Kelamin</Text>
        <TextInput
          style={styles.formControl}
          value={input.gender}
          onChangeText={(text) =>
            setInput((value) => ({ ...value, gender: text }))
          }
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Program Batch</Text>
        <TextInput
          style={styles.formControl}
          value={input.batch}
          onChangeText={(text) =>
            setInput((value) => ({ ...value, batch: text }))
          }
        />
      </View>

      <View>
      <TouchableOpacity onPress={Pesan} style={styles.button}>
            <Text style={styles.buttonText}>Tampilkan Pesan</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eeeee4"
    },
    formGroup: {
        marginHorizontal: 58,
        gap: 8,
      },
      formLabel: {
        fontSize: 16,
      },
      formControl: {
        backgroundColor: "#eeeee4",
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
        color: "#0d1b2a",
        borderWidth: 0.3,
        borderRadius: 4,
      },
      button: {
        backgroundColor: "#063970",
        paddingHorizontal: 24,
        paddingVertical: 10,
        marginHorizontal: 58,
        marginTop: 20,
        borderRadius: 4,
        borderWidth: 1,
      },
      buttonText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
      },
      judul:{
        fontSize: 25,
        fontWeight: "800"
      }

})
export default Tugas1;
