import { Text } from "react-native"

export const Component01 = ({ navigation }) => {
    return(
        <Text onPress={() => navigation.navigate('Component02')}>Component01</Text>
    )
}

export const Component02 = ({ navigation }) => {
    return(
        <Text>Component02</Text>
    )
}

export const Component03 = ({ navigation }) => {
    return(
        <Text onPress={() => navigation.navigate('Component04')}>Component03</Text>
    )
}

export const Component04 = ({ navigation }) => {
    return(
        <Text>Component04</Text>
    )
}