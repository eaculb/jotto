wordList = []

def legalWord(word):
	if word[-1] == 's':
		return False
	letterCounts = {}
	for letter in word:
		if letter in letterCounts:
			letterCounts[letter] += 1
		else:
			letterCounts[letter] = 1
	for letter in letterCounts:
		if letterCounts[letter] > 1:
			return False
	return True

with open('sgb-words.txt', 'r') as f:
	while True:
		curr = f.readline().strip()
		if not curr:
			break;
		if legalWord(curr):
			wordList.append(curr)

with open('legal-jotto-words.txt', 'w') as f:
	for word in wordList:
		f.write('\'%s\',\n' % word)