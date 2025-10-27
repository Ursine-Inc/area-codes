import { useRef } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import styles from './app-styles';

const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text
              style={[styles.textXL, styles.appTitleText]}
              testID="heading"
              role="heading"
            >
              Area Codes
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
