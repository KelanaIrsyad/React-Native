import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Image, Linking, SafeAreaView, StyleSheet, Text, View } from "react-native";

export const WidgetNavigationDrawer = (props) => {
  const logo = "https://icons.iconarchive.com/icons/iconarchive/childrens-book-animals/512/Chameleon-icon.png";

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={{uri: logo}} style={styles.logo} />
      <View style={styles.line}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={(props) => <View style={{ flexDirection: "row", gap: 8, alignItems: 'center' }}>
          <Text style={{color: props.color}}>About App</Text>
        </View>}
          onPress={() => Linking.openURL('https://github.com/KelanaIrsyad')}
        ></DrawerItem>
      </DrawerContentScrollView>
      <View style={styles.line}></View>
      <Text style={styles.author} onPress={() => Linking.openURL('https://github.com/KelanaIrsyad')}>
        Create by @Irsyad Kelana
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 10,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    width: 128,
    height: 128,
    resizeMode: 'center',
    alignSelf: 'center'
  },
  author: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 16
  }
})