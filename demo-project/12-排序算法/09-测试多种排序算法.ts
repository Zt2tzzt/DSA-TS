import { compareSort } from 'hy-algokit'
import bubbleSort from './01-冒泡排序bubbleSort'
import selectionSort from './02-选择排序selectionSort'
import insertionSort from './03-插入排序（insertionSort）'
import mergeSort from './04-归并排序（mergeSort）'
import quickSort from './06-快速排序（quickSort）-三数取中'
import heapSort from './07-堆排序（heapSort）'
import shellSort from './08-希尔排序（shellSort）'

compareSort([bubbleSort, selectionSort, insertionSort, mergeSort, quickSort, heapSort, shellSort], 100000)
