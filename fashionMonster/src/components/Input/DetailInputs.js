import React from 'react';
import CommonSizeInput from './CommonSizeInput';
import { topDetail, bottomDetail, skirtDetail, shoesDetail } from '../../assets/data/cateSize';

function DetailInputs({ selectedCategory, selectedSize, sizes, setSizes }) {
  const onChangeInput = (selectedSize, label, text) => {
    const copiedSizes = [...sizes];
    const currentSizeIdx = copiedSizes.findIndex(sz => sz.value === selectedSize);

    if (!copiedSizes[currentSizeIdx].detail) {
      copiedSizes[currentSizeIdx].detail = [{ name: label, value: text }];
    } else {
      const detailIdx = copiedSizes[currentSizeIdx].detail.findIndex(sz => sz.name === label);
      if (detailIdx !== -1) {
        const labelIdx = copiedSizes[currentSizeIdx].detail.findIndex(v => v.name === label);
        copiedSizes[currentSizeIdx].detail[labelIdx] = { name: label, value: text };
      } else {
        copiedSizes[currentSizeIdx].detail = [...copiedSizes[currentSizeIdx].detail, { name: label, value: text }];
      }
    }
    setSizes(copiedSizes);
  }
  return (
    <>
      {(function () {
        switch (selectedCategory) {
          case '여성상의':
          case '남성상의':
          case '여성 아우터':
          case '남성 아우터':
          case '원피스':
            return (
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
            );
          case '여성하의':
          case '남성하의':
            return (
              bottomDetail.map(detail => (
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
            );
          case '스커트':
            return (
              skirtDetail.map(detail => (
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
            )
          default:
            return (
              shoesDetail.map(detail => (
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
            )
        }
      })()}
    </>
  );
};

export default DetailInputs;