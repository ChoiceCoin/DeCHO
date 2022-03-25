import React from 'react';
import {
  VStack,
  Text,
  TextArea,
  ScrollView,
  Button,
  HStack,
  Divider,
  useToast,
  Pressable,
} from 'native-base';
import colors from '../utils/colors';
import {KeyboardAvoidingView, Input, Modal, Image} from 'native-base';
import {Platform, NativeModules} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const copy = require('../../assets/images/connectWallet/copy.png');

function NewWalletSuccess({navigation}) {
  const [showModal, setShowModal] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [info, setInfo] = React.useState({mnemonic: 'b', address: 'a'});
  const toast = useToast();

  const {RNAlgo} = NativeModules;
  if (!status) {
    RNAlgo.createAccount((accountInfo) => {
      setStatus(true);
      setInfo(accountInfo);
    });
  }

  return (
    <KeyboardAvoidingView
      background={colors.white}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <VStack w="100%" h="100%" px={5} pt={10}>
          {/*<Button variant={'link'} onPress={()=>{*/}
          {/*    navigation.goBack()*/}
          {/*}}>*/}
          {/*    Go back*/}
          {/*</Button>*/}
          <Text
            fontWeight={'500'}
            mb={5}
            color={colors.black}
            fontSize={'30'}
            fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
            DeCHO
          </Text>
          <Text
            fontWeight={'500'}
            mb={5}
            color={colors.black}
            fontSize={'14'}
            fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
            Success!
          </Text>
          <Text
            mb={1}
            color={colors.black}
            fontSize={'24'}
            fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
            Your new wallet has been generated!
          </Text>
          <Pressable
            onPress={() => {
              Clipboard.setString(info.address);
              toast.show({
                description: 'Copied Address',
              });
            }}
            flexDirection={'row'}
            background={colors.grey}
            p={2}
            borderRadius={'md'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Text
              color={colors.black}
              fontSize={'9'}
              fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
              {info.address}
            </Text>
            <Image
              source={copy}
              alt="applause"
              h="1"
              w="1"
              alignSelf={'center'}
            />
          </Pressable>
          <Divider my={5} />

          <Text
            fontWeight={'500'}
            mb={5}
            color={colors.black}
            fontSize={'24'}
            fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
            Memonic Keys
          </Text>
          <Text
            mb={5}
            color={colors.black}
            fontSize={'20'}
            fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
            Safe Guard your mnemonics and save them now!
          </Text>
          <TextArea mb={5}>{info.mnemonic}</TextArea>
        </VStack>
      </ScrollView>
      <Button
        /*isLoading = { showModal }*/ isLoading={true}
        mx={5}
        mb={5}
        colorScheme="teal"
        onPress={() => setShowModal(true)}>
        Coming Soon
      </Button>
    </KeyboardAvoidingView>
  );
}

export default NewWalletSuccess;
