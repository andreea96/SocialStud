/**
 * Created by andreea.olaru on 10/24/2017.
 */
import React from 'react';
import { ScrollView, StyleSheet, SectionList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Courses',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <SectionList
                    renderItem={({item}) => <ListItem title={item} />}
                    renderSectionHeader={({section}) => <Header title={section.title} />}
                    sections={[ // homogenous rendering between sections
                        {data: 'data', title: 'title'},
                    ]}
                />

                <SectionList
                    sections={[ // heterogeneous rendering between sections
                        {data: 'data', renderItem: 'title'},

                    ]}
                />
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
});
