/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, Text} from '../../components';
import {COLORS, FONTS, SHOES_DATA, SIZES_DATA, SPACINGS} from '../../constants';
import {AirbnbRating} from '@rneui/themed';
import {Button} from '@rneui/base';

const ProductDetail = ({navigation}) => {
  const shoes = SHOES_DATA[0];

  return (
    <View style={styles.container}>
      {/* background */}
      <View style={styles.background} />
      <Header />
      {/* content */}
      <View style={styles.content}>
        {/* banner */}
        <View>
          <Image
            style={styles.image}
            source={shoes.picture}
            resizeMode="contain"
          />
          <View style={styles.colorWrap}>
            {shoes.colors?.map(el => {
              return (
                <View key={el} style={{...styles.colorItem, borderColor: el}}>
                  <View style={{...styles.color, backgroundColor: el}} />
                </View>
              );
            })}
          </View>
        </View>
        {/* information */}
        <View style={styles.information}>
          <View>
            <Text
              weight={FONTS.weights.mixed}
              size={FONTS.sizes.xl}
              color={COLORS.blackLight}>
              {shoes.title}
            </Text>
            <View style={styles.starWrap}>
              <AirbnbRating
                isDisabled
                defaultRating={5}
                reviews={[]}
                size={13}
                reviewSize={1}
                showRating={false}
              />
              <Text color={COLORS.textGray}>(540 Reviews)</Text>
            </View>
          </View>
          <Text h4>$350.00</Text>
        </View>
        {/* details */}
        <View style={styles.detailWrap}>
          <Text weight={FONTS.weights.mixed} size={FONTS.sizes.lg}>
            Details
          </Text>
          <Text color={COLORS.textGray} marginTop={SPACINGS.md}>
            Consectetur adipiscing elit. Nunc molestie est sem perin vitae sit
            massa. Hendrerit potenti faucibush asellus egetId suspendisse
            tristique ultricies lectu ligula blandit commodo tellus . . . . Read
            More
          </Text>
        </View>
        {/* list size */}
        <View>
          <Text
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.lg}
            marginHorizontal={SPACINGS.xxxl}>
            size
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listSize}>
            {SIZES_DATA.map(el => {
              return (
                <Button
                  title={el.title}
                  buttonStyle={{
                    width: 50,
                    height: 50,
                    borderRadius: SPACINGS.md,
                    backgroundColor:
                      el.id === '1' ? COLORS.primary : COLORS.white,
                    marginLeft: el.id === '1' ? 0 : SPACINGS.md,
                  }}
                  titleStyle={{
                    color: el.id === '1' ? COLORS.white : COLORS.black,
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <Button
          type="outline"
          buttonStyle={{
            height: 52,
            borderRadius: SPACINGS.md,
            marginRight: SPACINGS.lg,
            borderColor: COLORS.gray,
            borderWidth: 2,
          }}
          icon={{
            name: 'bookmark-o',
            type: 'font-awesome',
            size: 25,
            color: COLORS.gray,
          }}
        />
        <Button
          title="Add to cart"
          containerStyle={{flex: 1}}
          buttonStyle={{
            height: 52,
            borderRadius: SPACINGS.md,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    right: 0,
    width: 170,
    height: 379,
    backgroundColor: COLORS.purple,
  },
  image: {
    width: '100%',
    height: 300,
  },
  color: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  colorWrap: {
    position: 'absolute',
    left: SPACINGS.xxxl,
    top: 50,
  },
  colorItem: {
    width: 28,
    height: 28,
    borderWidth: 1,
    marginBottom: SPACINGS.lg,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: SPACINGS.xxxl,
    marginTop: 0,
  },
  detailWrap: {
    margin: SPACINGS.xxxl,
    marginTop: 0,
  },
  listSize: {
    paddingHorizontal: SPACINGS.xxxl,
    paddingTop: SPACINGS.lg,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SPACINGS.xxxl,
  },
});
