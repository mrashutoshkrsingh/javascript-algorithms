/**
 * BACKTRACKING approach of solving Jump Game.
 *
 * @param {number[]} numbers - array of possible jump length.
 * @param {number} startIndex - index from where we start jumping.
 * @param {number[]} currentJumps - current jumps path.
 * @return {boolean}
 */
export default function btJumpGame(numbers, startIndex = 0, currentJumps = []) {
  if (startIndex === numbers.length - 1) {
    // We've jumped directly to last cell. This situation is a solution.
    return true;
  }

  // Check what the longest jump we could make from current position.
  // We don't need to jump beyond the array.
  const maxJumpLength = Math.min(
    numbers[startIndex], // Jump is within array.
    numbers.length - 1 - startIndex, // Jump goes beyond array.
  );

  // Let's start jumping from startIndex and see whether any
  // jump is successful and has reached the end of the array.
  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    // Try next jump.
    const nextIndex = startIndex + jumpLength;
    currentJumps.push(nextIndex);

    const isJumpSuccessful = btJumpGame(numbers, nextIndex, currentJumps);

    // Check if current jump was successful.
    if (isJumpSuccessful) {
      return true;
    }

    // BACKTRACKING.
    // If previous jump wasn't successful then retreat and try the next one.
    currentJumps.pop();
  }

  return false;
}