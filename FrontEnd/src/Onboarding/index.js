import React from 'react';
import {Image, VStack, Text, HStack, Pressable, ScrollView} from 'native-base';
import colors from '../utils/colors';
import Dots from 'react-native-dots-pagination';
import PagerView from 'react-native-pager-view';

const applause = require('../../assets/images/onboarding/applause.png');
const award = require('../../assets/images/onboarding/award.png');
const funding = require('../../assets/images/onboarding/funding.png');
const verified = require('../../assets/images/onboarding/verified.png');
const tut1 = require('../../assets/images/onboarding/tut1.png');
const tut2 = require('../../assets/images/onboarding/tut2.png');


function Onboarding({navigation}) {
  return (
    <PagerView style={{flex: 1}} initialPage={0}>
      <ScrollView background={colors.black}>
      <VStack
        w="100%"
        justifyContent={'flex-end'}
        p={5}>
        <Image
          my={50}
          source={applause}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          Welcome!
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          View the tutorial before proceeding.
        </Text>
        <Image
          mt={15}
          source={tut1}
          alt="applause"
          w="100%"
          h={600}
          resizeMode='contain'
          alignSelf={'center'}
        />
        <Image
          source={tut2}
          alt="applause"
          w="100%"
          h={500}
          resizeMode='contain'
          alignSelf={'center'}
        />
        <HStack mt={185} alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={0}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
      </ScrollView>
      <VStack
        w="100%"
        h="100%"
        background={colors.black}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={verified}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          Now, you can vote and approve projects!
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          Only Approved projects will be listed
        </Text>
        <HStack mt={155} alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={1}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
      <VStack
        w="100%"
        h="100%"
        background={colors.black}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={funding}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          View listed projects.
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          If a project reaches its goal, it will be funded. All funds will be returned to the donors adddress if it happens that the project does not reach it's goal.
        </Text>
        <HStack mt={155} alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={2}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
      <VStack
        w="100%"
        h="100%"
        background={colors.black}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={award}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          Finally, you can earn choice token for voting.
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          Ensure, you opt in to the Choice ASA
          {'\n'}
          {'\n'}
          Testnet ASA ID : 71501663
          {'\n'}
          Mainnet ASA ID : 297995609
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('AnonymousApproval');
          }}
          mt={75}
          shadow={7}
          h="60"
          w="60"
          rounded={'full'}
          alignItems={'center'}
          justifyContent={'center'}
          background={colors.white}>
          <Text
            color={colors.black}
            fontWeight={'500'}
            fontSize={'20'}
            fontFamily={'JosefinSans-Regular'}>
            Vote!
          </Text>
        </Pressable>
        <HStack alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={3}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
    </PagerView>
  );
}

export default Onboarding;
