import React from 'react';
import {Button, ScrollView, Text, VStack} from 'native-base';
import colors from '../utils/colors';
import NameBox from '../globalComponents/infoBox/NameBox';
import ProgressBox from '../globalComponents/ProgressBox/ProgressBox';

function ViewInfo({route, navigation}) {
  const {item} = route.params;

  return (
    <ScrollView bg={colors.white}>
      <VStack w={'100%'} h={'100%'} px={5} pt={10} space={3}>
        <Button
          variant={'link'}
          my={5}
          onPress={() => {
            navigation.goBack();
          }}
          colorScheme={'muted'}
          alignSelf={'flex-start'}>
          {'<< Go Back'}
        </Button>
        <Text
          color={colors.black}
          fontSize={'24'}
          fontFamily={'JosefinSans-Regular'}
          mx={2}>
          Hi, Good morning.
        </Text>
        <NameBox
          name={item.title}
          slogan={item.short_description}
          img={item.photo_url}
        />

        <ProgressBox
          goal={item.cause_approval.goal}
          progress={item.balance}
          prefix={''}
        />
        <Text fontSize={12} pb={10} pt={10}>
          {item.long_description}
        </Text>
      </VStack>
    </ScrollView>
  );
}

export default ViewInfo;
