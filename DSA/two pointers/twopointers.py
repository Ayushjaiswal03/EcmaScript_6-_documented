class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        last_non_zero = 0  # pointer for placing next non-zero element

        # Move all non-zero elements forward
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[last_non_zero], nums[i] = nums[i], nums[last_non_zero]
                last_non_zero += 1

nums = [0, 1, 0, 3, 12]
s = Solution()
s.moveZeroes(nums)
print(nums)

