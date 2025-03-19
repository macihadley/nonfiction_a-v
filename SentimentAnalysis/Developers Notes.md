Originally was going to use Voyant tools which a previous Digital Humanities Senior Project team used in the past
Voyant did not allow for sentiment analysis to appear in the text, only in a list. 
We decided to try other sentiment analysis tools that would give us more flexibility on how we can show the sentiment analysis in context to the text. 


Decided to look at open source, free, light weight, yet accurate sentiment analysis tools. 
Looked at Textblot: a simple library for sentiment analysis. Used machine learning algorithms and natural language processing to analyze text and determine sentiment. 
Looked at VADER:  (Valence Dictionary and sEntiment Reasoner). Used mostly to analyze sentiments in social media. It is lexicon and rule-based - uses words or phrases and as well as grammatical and syntactical rules to determine the sentiment of the text. It is open sourced from MIT license and provides sentiment scores -1 being most negative, +1 being most positive, along with a compound. The compound is the overall sentiment of the text. It is calculated by summing the valence scores of each word in the text, adjusted according to the rules of the VADER algorithm, and then normalized to fall within the -1 to +1 range.  


We decided to go with the newest, updated version of VADER, in conjunction with NLTK to handle sentiment analysis on longer texts to decompose paragraphs, articles, publications, or novels. VADER can handle typical negations (“not good”), use contractions as negations (“wasn’t very good”), conventional use of punctuation to signal increased sentiment intensity (“Good!!!”), conventional use of word-shape to signal emphasis (“GOOD”), and using degree modifiers to alter sentiment intensity (“very”, “kind of”, etc.).
NLTK is the Natural Language ToolKit that is a library in Python working with human language data (text). 


This allowed us to use an open source lightweight and free sentiment analysis tool that we could alter if needs be. It has a large and robust dictionary of words and rules and includes the context of the grammar and punctuation in its sentiment analysis which is important when thinking about the sentiment in context to the words and grammar around it. This is more of what we had in mind from the get go and Voyant also did not offer this kind of sentiment analysis. Using VADER with NLTK allows us to do sentiment analysis on the large non-fiction works. We find that the sentiment analysis stays consistent throughout the entirety of the text no matter the file size. 


Once we decided on the sentiment analysis tool, we did a simple test with one paper. 
We used the IDE PyCharm to easily run the python code.
We edited the colors of our sentiment - blue being negative, orange being positive. We choose these colors as they are more visible than red and green, especially for people who might have color-blindness. 
We then ran all the non-fiction work through the sentiment analysis outputting HTML files with the sentiment analysis within the text.
We did this by have the code prompt user to select a folder with all the Nonfiction txt files and output all HTML files with the sentiment analysis in a separate output folder. 

We then also ran each text file through the scoring code - to get a visual, graphical output of the sentiment score of each text file. This way you can read the text with the sentiment analysis included. That will allow readers to understand the sentiment in context to the text. Readers will also get a visual of the sentiment in the text in the graph. 
