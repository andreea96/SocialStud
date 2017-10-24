import React from 'react';
import { ScrollView, StyleSheet,SectionList,FlatList, Text,View } from 'react-native';
import Card from "../node_modules/react-navigation/lib/views/CardStack/Card";


export default class CoursesListScreen extends React.Component {



    static navigationOptions = {
        title: 'Courses',
    };

    render() {
        let dataSource=[
            {   Course1: 'AC', Sala: 'A01', Ora: '09:00' },
            {   Course1: 'MAP', Sala: 'A02', Ora: '09:00' },
            {   Course1: 'MS', Sala: 'A03', Ora: '09:00' },
            {   Course1: 'PS', Sala: 'A04', Ora: '10:00' },
        ];
        return (
            <ScrollView style={styles.container}>
                <FlatList style={styles.flatListContainer}
                data={dataSource}
                renderItem={
                    ({item}) =>

                               <View style={styles.lineContainer}>
                                <Text style={styles.textContainer}>
                                    {item.Sala}
                                </Text>
                                   <Text>
                                       {item.Course1}
                                       </Text>
                                   <Text>
                                       {item.Ora}
                                   </Text>
                            </View>

            }/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',

    },
    flatListContainer:{
        flex: 1,
    },
    lineContainer: {
        backgroundColor: '#ff69b4',
        borderRadius: 3,
        paddingHorizontal: 4,
        marginBottom: 10,
        alignItems: 'center',

    },
    textContainer: {
        fontSize: 20,

    }

});
