import React from 'react';
import { View } from 'react-native';
import CommonSizeInput from './CommonSizeInput';
import { topDetail, bottomDetail, skirtDetail } from '../../assets/data/cateSize';

function DetailInputs({ selectedCategory, selectedSize, sizes, setSizes }) {
  const onChangeInput = (selectedSize, label, text) => {
    const copiedSizes = [...sizes];
    const currentSizeIdx = copiedSizes.findIndex(sz => sz.value === selectedSize);

    if (!copiedSizes[currentSizeIdx].detail) {
      copiedSizes[currentSizeIdx].detail = [{ label, value: text }];
    } else {
      const detailIdx = copiedSizes[currentSizeIdx].detail.findIndex(sz => sz.label === label);
      if (detailIdx !== -1) {
        const labelIdx = copiedSizes[currentSizeIdx].detail.findIndex(v => v.label === label);
        copiedSizes[currentSizeIdx].detail[labelIdx] = { label, value: text };
      } else {
        copiedSizes[currentSizeIdx].detail = [...copiedSizes[currentSizeIdx].detail, { label, value: text }];
      }
    }
    setSizes(copiedSizes);
  }

  return (
    <View>
      {selectedCategory === '여성상의' |
        selectedCategory === '남성상의' |
        selectedCategory === '여성 아우터' |
        selectedCategory === '남성 아우터' |
        selectedCategory === '원피스'
        ?
        topDetail.map(detail => (
          sizes.findIndex(v => v.value === selectedSize) !== -1
            ?
            <CommonSizeInput
              key={detail.id}
              placeholder={detail.placeholder}
              label={detail.value}
              selectedSize={selectedSize}
              sizes={sizes}
              onChangeInput={onChangeInput}
            />
            :
            null
        ))
        : (selectedCategory === '여성하의' | selectedCategory === '남성하의'
          ? bottomDetail : skirtDetail).map(detail => (
            <CommonSizeInput
              key={detail.id}
              placeholder={detail.placeholder}
              label={detail.value}
              selectedSize={selectedSize}
              sizes={sizes}
              onChangeInput={onChangeInput}
            />
          ))
      }
    </View>
  );
};

export default DetailInputs;