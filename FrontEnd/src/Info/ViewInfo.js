import React from "react";
import { Button, HStack, Image, useToast, Modal, Pressable, Progress, ScrollView, Text, VStack } from "native-base";
import { Platform, TouchableOpacity } from "react-native";
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from "../utils/colors";
import AppLoading from 'expo-app-loading';
import NameBox from "../globalComponents/infoBox/NameBox";
import ProgressBox from "../globalComponents/ProgressBox/ProgressBox";


function ViewInfo({ navigation }) {

  const toast = useToast()
  const copy = require('../../assets/images/connectWallet/copy.png')

  let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });
  const [showModal, setShowModal] = React.useState(false);
  let pFix = ''

  if (!fontsLoaded && Platform.OS == 'ios') {
    return <AppLoading />;
  } else {
    return(
      <ScrollView bg={colors.white}>
        <VStack w={'100%'} h={'100%'} px={5} pt={10} space={3}>
          <Button variant={'link'}
                  my={5}
          onPress={()=>{navigation.goBack()}}
          colorScheme={'muted'} alignSelf={'flex-start'}>
            {'<< Go Back'}
          </Button>
          <Text
            color={colors.black}
            fontSize={'24'}
            fontFamily={'JosefinSans_700Bold'} mx={2}>
            Hi, Good morning.
          </Text>
          <NameBox name={'XCA DeCHO'} slogan={'A great DeCHO'}/>

          <ProgressBox goal={3125000} progress={150000} prefix={''}/>
          <Text fontSize={12} pb={10} pt={10}>
            Mauris in molestie erat, nec pellentesque ipsum. Nam varius, enim non ultrices fringilla, ipsum est luctus erat, et vulputate ante nisi ac augue. Pellentesque odio ante, congue at arcu in, fringilla aliquet lectus. Vivamus tempus sapien quis metus semper, a pulvinar diam cursus. Suspendisse eu tristique enim. Pellentesque nec nunc quam. Morbi bibendum, lacus id consectetur viverra, magna nisi vehicula sem, nec pretium nibh dolor vitae quam. Fusce eget ultrices magna. Aliquam metus felis, dignissim eu felis eu, suscipit sollicitudin libero. Maecenas dapibus magna nec nunc finibus vestibulum. Sed magna mi, sodales in tellus sit amet, placerat porta justo. Vestibulum mollis ac purus vitae mattis.
            {'\n'}
            {'\n'}
            Nam quis volutpat massa. Nunc ultrices erat risus, id commodo erat tincidunt vitae. Suspendisse blandit mauris vel orci feugiat, non congue mi auctor. Suspendisse semper, lorem sed elementum venenatis, ante ex venenatis justo, id porta mauris tortor ac enim. Praesent varius lectus nisl, sollicitudin molestie turpis bibendum et. Vestibulum efficitur odio nec tortor euismod viverra. Sed egestas venenatis eros, id commodo augue blandit sit amet. Nam sagittis, velit eget varius fringilla, sem massa aliquam arcu, id aliquet eros dolor in velit. Aliquam feugiat quam quis nisi elementum rhoncus ac convallis nunc. Mauris sed leo elit. Nulla id hendrerit metus, eget consequat magna.
            {'\n'}
            {'\n'}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum ac leo id luctus. Quisque accumsan, dui vitae rutrum rutrum, tortor metus convallis magna, vitae dignissim magna nulla vitae lectus. Sed eget erat ligula. Pellentesque dictum sem sem, dapibus feugiat est auctor at. Praesent dignissim sodales sapien eu hendrerit. Fusce turpis mi, euismod sit amet egestas non, volutpat in lorem. Suspendisse suscipit massa ac convallis efficitur. Integer at ex venenatis, ultricies urna a, condimentum lorem. Vivamus sit amet rutrum sapien. Integer blandit faucibus risus, a condimentum nisi sollicitudin lobortis. Donec in lacus maximus, ultrices eros ac, viverra augue. Nulla facilisi.
            {'\n'}
            {'\n'}
            Nam eget purus in arcu congue faucibus. Maecenas consectetur commodo mi at aliquam. Aliquam consectetur, enim eu congue finibus, metus metus varius erat, at ornare nulla sapien vel quam. Mauris convallis lorem eget lorem scelerisque molestie. Nam nunc tortor, aliquet ac lectus et, aliquet finibus nulla. Aenean quis tristique velit. Sed facilisis hendrerit diam, eget vestibulum risus ornare eget. Nulla molestie libero sit amet eros commodo vulputate. Etiam vulputate, nulla vel convallis gravida, neque nibh egestas arcu, eget venenatis erat odio viverra orci. Ut sollicitudin tempus sapien euismod sagittis. Phasellus maximus sem sit amet nisi aliquet, vulputate ultrices leo tristique. Maecenas diam ante, lobortis ac purus eu, commodo facilisis est.
            {'\n'}
            {'\n'}
            Duis aliquam aliquet elit, in placerat felis ultricies ac. Praesent sed euismod quam. Pellentesque id leo elit. Aenean sed ex varius, condimentum dolor nec, rhoncus est. Curabitur semper ultrices mi, ac volutpat urna venenatis cursus. Suspendisse congue faucibus lorem, eu dapibus eros laoreet eu. Mauris a tristique magna, dignissim placerat elit. Sed odio enim, imperdiet in quam eget, ultrices blandit erat. Nunc sit amet sollicitudin turpis. Suspendisse potenti. Suspendisse id posuere felis. Vivamus dapibus nulla ex, a posuere leo rhoncus ut.
          </Text>
        </VStack>
      </ScrollView>
    )}
}

export default ViewInfo;

