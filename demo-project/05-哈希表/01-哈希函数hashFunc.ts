/**
 * @description: 此函数用于：将 key 6映射成 index。
 * @Author: ZeT1an
 * @param {string} key
 * @param {number} max
 * @return {*}
 */
function hashFunc(key: string, max: number): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % max;
} 
  
