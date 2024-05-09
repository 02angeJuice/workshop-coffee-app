import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useBoundStore} from '../store/store';
import {COLORS} from '../theme/theme';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../components/HeaderBar';
import GradientBGIcon from '../components/GradientBGIcon';

const getCategoriesFromData = (data: any) => {
  const result = [...new Set(data?.map((item: any) => item.name))];
  result?.unshift('ALL');
  return result;
};

const getCoffeeList = (category, data) => {
  return category === 'ALL'
    ? data
    : data?.filter((item: any) => item?.name === category);
};

export default function HomeScreen() {
  // const coffeeList = useBoundStore((state: any) => state?.coffeeList);

  const {coffeeList} = useBoundStore();
  const {beanList} = useBoundStore();

  const [categories, setCategories] = useState(
    getCategoriesFromData(coffeeList),
  );
  const [searchText, setSearchText] = useState(null);

  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex?.category, coffeeList),
  );

  const tabBatHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
        // style={styles.scrollViewFlex}
      >
        <GradientBGIcon name="dsds" color="white" size={20} />

        {/* {categories?.map(cate => {
          return <HeaderBar title={cate} />;
        })} */}
      </ScrollView>
      {/* 
      {coffeeList?.map((item, idx) => {
        return (
          <View key={idx}>
            <Text style={{color: COLORS.primaryDarkGreyHex}} key={idx}>
              {item?.name}
            </Text>
            <Text style={{paddingLeft: 20}}>
              {item?.description?.slice(0, 30)}
            </Text>
          </View>
        );
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },

  textCategories: {
    color: COLORS.primaryLightGreyHex,
  },

  // categoriesList: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   gap: 2,
  // },
});
