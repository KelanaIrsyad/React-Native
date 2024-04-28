import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Tugas3 = ({ navigation }) =>{
    const [input, setInput] = useState({
        nama: "",
        harga: 0,
        qty: 0,
      });

      const total = () => {
        const { harga, qty } = input;
        return harga * qty;
      }
      const reset = () => {
        setInput({
          nama: "",
          harga: 0,
          qty: 0,
        })
      }

      return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.judul}>Tugas 3</Text>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Nama Barang</Text>
                <TextInput
                style={styles.formControl}
                value={input.nama}
                onChangeText={(text) =>
                    setInput((value) => ({ ...value, nama: text }))
                  }
                />    
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Harga</Text>
                <TextInput
                style={styles.formControl}
                value={input.harga}
                onChangeText={(text) =>
                    setInput((value) => ({ ...value, harga: text }))
                  }
                />    
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Qty</Text>
                <TextInput
                style={styles.formControl}
                value={input.qty}
                onChangeText={(text) =>
                    setInput((value) => ({ ...value, qty: text }))
                  }
                />    
            </View>
            <View>
                <Text style={styles.total}>Jumlah yang harus di bayar RP. {total()}</Text>
            </View>

            <View>
            <TouchableOpacity onPress={()=>{total()}} style={styles.button}>
            <Text style={styles.buttonText}>Hitung</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={()=>{reset()}} style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
            </View>
        </View>
      )
}

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
      },
      total:{
        fontSize: 16,
        marginHorizontal: 45,
        marginTop: 10
      }
})

export default Tugas3