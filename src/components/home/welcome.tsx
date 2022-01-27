import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { WelcomeScreenTypes } from 'src/components/home/utils/types';
const Welcome = ({ colors, user }: WelcomeScreenTypes) => {
  const styles = StyleSheet.create({
    headingOne: {
      fontSize: 25,
      color: 'white',
      fontFamily: 'sans-serif-condensed',
      marginTop: 24,
      marginBottom: 12,
    },
    iconContainer: {
      borderWidth: 1,
      borderColor: colors.primary,
      backgroundColor: colors.background,
    },
  });

  return (
    <>
      <Icon
        size={100}
        name="clipboard-list"
        type="font-awesome-5"
        color="white"
      />
      <Text style={styles.headingOne}>
        Welcome {user.firstName + ' ' + user.lastName}
      </Text>
    </>
  );
};

export default Welcome;
