import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

type MediaItemProps = {
  item: MediaItemWithOwner;
  navigation: NavigationProp<ParamListBase>;
};

const MediaListItem = ({item, navigation}: MediaItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log(item.title + ' painettu!');
        navigation.navigate('Single');
      }}
    >
      <Image
        source={{
          uri:
            item.thumbnail || (item.screenshots && item.screenshots[2]) || '',
        }}
        style={styles.image}
      />

      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Uploaded: {new Date(item.created_at).toLocaleString('fi-FI')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },

  image: {
    width: 300,
    height: 300,
  },
});

export default MediaListItem;
