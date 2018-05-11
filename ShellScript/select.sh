#!/bin/bash

array=("さとう" "なかもと" "ほりえもん" "みたらい" "きしま" "うすい" "とつぎ" "かない" "すがはら" "まなべ")


if [ $# -eq 0 ]; then
  num=`expr $RANDOM % 10`
  echo ${array[$num]}
  exit 1
fi
 
numarray=(0 0 0 0 0 0 0 0 0 0)

for((i=0 ; i<$1 ; i++))
do
 num=`expr $RANDOM % 10`
 echo ${array[$num]}
 numarray[$num]=$((numarray[$num] + 1))
done

for((i=0 ; i<10 ; i++))
do
 echo $i, ${numarray[i]}
done
