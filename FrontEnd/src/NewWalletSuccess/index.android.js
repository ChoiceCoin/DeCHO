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
import {Platform} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Algo from 'react-native-algo';

const copy = require('../../assets/images/connectWallet/copy.png');

function NewWalletSuccess({navigation}) {
  const [showModal, setShowModal] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [info, setInfo] = React.useState({mnemonic: 'b', publicAddress: 'a'});
  const toast = useToast();

  console.log('debug');
  const votingASAID = 21364625;

  if (!status) {
    Algo.createClientFromPurestake(
      'TESTNET',
      443,
      'iSusnJg4L15ucSz2c73tq3HS5hitxZY71ye84MVh',
      (error, result) => {
        if (error) {
          console.error(error);
          return;
        } else {
          console.log(result);
          setStatus(true);
          Algo.createNewAccount((result) => {
            setInfo(result);
            console.log(result);
          });
        }
      },
    );
  } else {
  }

  return (
    <KeyboardAvoidingView
      background={colors.white}
      behavior="height"
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
              Clipboard.setString(info.publicAddress);
              toast.show({
                description: 'Copied Address',
              });
            }}
            flexDirection={'row'}
            background={colors.grey}
            p={5}
            borderRadius={'md'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Text
              color={colors.black}
              fontSize={'8'}
              fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
              {info.publicAddress}
            </Text>
            <Image
              source={copy}
              alt="applause"
              h="5"
              w="5"
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
        isLoading={!status}
        mx={5}
        mb={5}
        colorScheme="teal"
        onPress={() => {}}>
        Proceed
      </Button>
    </KeyboardAvoidingView>
  );
}

export default NewWalletSuccess;
