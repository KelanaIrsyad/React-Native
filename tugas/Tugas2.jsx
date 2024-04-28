import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Tugas2 = ({ navigation }) => {
  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [hasil, setHasil] = useState('');

  const perhitungan = (hitung) => {
    const angkaPertama = parseFloat(angka1);
    const angkaKedua = parseFloat(angka2);
    let hasilnya;

    if (hitung === "+") {
      hasilnya = angkaPertama + angkaKedua;
    } else if (hitung === "-") {
      hasilnya = angkaPertama - angkaKedua;
    } else if (hitung === "*") {
      hasilnya = angkaPertama * angkaKedua;
    } else if (hitung === "/") {
      hasilnya = angkaPertama / angkaKedua;
    }

    setHasil(hasilnya)
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.judul}>Tugas 2</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Angka Pertama</Text>
        <TextInput
          style={styles.formControl}
          value={angka1}
          onChangeText={(text) => setAngka1(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Angka Kedua</Text>
        <TextInput
          style={styles.formControl}
          value={angka2}
          onChangeText={(text) => setAngka2(text)}
        />
      </View>

      <View>
        <Text style={styles.angka}>Hasilnya: {hasil}</Text>
      </View>

      <View>
      <TouchableOpacity onPress={() => perhitungan('+')} style={styles.button}>
            <Text style={styles.buttonText}>Pertambahan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => perhitungan('-')} style={styles.button}>
            <Text style={styles.buttonText}>Pengurangan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => perhitungan('*')} style={styles.button}>
            <Text style={styles.buttonText}>Perkalian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => perhitungan('/')} style={styles.button}>
            <Text style={styles.buttonText}>Pembagian</Text>
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
      angka:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16
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

export default Tugas2
