import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthContext } from 'src/contexts/auth';
import { ThemeContext } from 'src/contexts/theme';
import {
  Header,
  ButtonStyled,
  Subheading,
  TextInputStyled,
} from 'src/components/_root';
import Circles from 'src/components/_root/circles';

const CompleteRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const { onCreateUser, apiError, apiLoading, error, setError } =
    useContext(AuthContext);
  const { colors } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 40,
    },
    input: {
      height: 40,
      borderWidth: 1,
      marginVertical: 5,
    },
    form: {
      margin: 12,
      width: '70%',
    },
    completeBtn: {
      width: '70%',
    },
    errorText: {
      marginTop: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      color: colors.danger,
    },
  });

  return (
    <View style={styles.container}>
      <Circles />
      <Header content="Almost There!" color={colors.primary} />
      <Subheading content="What should we call you?" />
      <View style={styles.form}>
        <TextInputStyled
          setValue={setFirstName}
          value={firstName}
          placeholder="First Name"
          autoComplete="name"
          error={error ? true : apiError ? true : false}
        />
        <TextInputStyled
          setValue={setLastName}
          value={lastName}
          placeholder="Last Name"
          autoComplete="name"
          error={error ? true : apiError ? true : false}
        />
        <TextInputStyled
          setValue={setUserName}
          value={userName}
          placeholder="Username"
          autoComplete="username"
          error={error ? true : apiError ? true : false}
        />
        <Text style={styles.errorText}>{apiError}</Text>
      </View>
      <View style={styles.completeBtn}>
        <ButtonStyled
          title="Complete Registration!"
          onPress={() => {
            if (firstName && lastName && userName) {
              onCreateUser({ firstName, lastName, userName });
            } else {
              setError('Please fill all the fields');
            }
          }}
        />
      </View>
      <View>
        <Text>{apiLoading ? 'Loading...' : null}</Text>
      </View>
    </View>
  );
};

export default CompleteRegistration;
