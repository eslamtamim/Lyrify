# Lyrify
Make the lyrics of the song you are listening not to appear unless it's time to.

# What, Why, How ?

## Firstly, What?
this is simply just a Js script that changes some Css properties to make the Lyrics page on Spotify more fun.
-- atleast for me -

So what does it do ? 
t just changes the color of the background of the lyrics page to the color of the inactive lyrics so it makes them disappear - magic ✨✨ - 

So this is how the normal lyrics page look like 'Lame' ugh

<img src="/imgs/Without-Extention.jpg" alt="a pic of the lyrics page on spotify without the extention enabled" width="559" height="468">

Now the more fun version ✨

<img src="/imgs/With-Extention.jpg" alt="a pic of the lyrics page on spotify with the extention enabled" width="559" height="468">

Even more fun thing you can do with it is to just [get rid of](https://github.com/Eslamtamim/Lyrify#finally) the Font-Family and it will even look better like this

<img src="/imgs/With-Extention&WIthout-the-Font.jpg" alt="a pic of the lyrics page on spotify with the extention enabled and without the Font-Family" width="559" height="468">



## Why? 
as i said it's more fun.

I always wanted to know how Web Extentions work and always full of ideas to make the websites i use better and more fun so i finally started this with a simple script on one of my most places i visit (Spotify).

## How?
at first i didn't know anything on how to make a web ectention, the only thing i know is there is JS in the making of the extention and a side note to whoever reading this, I HATE JS.

So, i run to the 'He Who Knows' - `chatGPT` - to help me with this and as usual it's incredible how much time he saves us. 

I know some Js and i had the logic in my mind, of course i didn't just make him do everything so i gave him the logic and everything I know and he helped me writing the `manifest.json` which is the Config file for the extention to run. 

After that i wrote the js logic in the `script.js` and tested it in the console of the Spotify lyrics page and it WORKED.
but of course it just works for the first time and i needed it to work everytime i open up the lyrics page.

So, finally here comes the real work of `chatGPT`, i just asked him to make the code work everytime the page renders something and not just on reload.

And he did send me this block of code

```javascript
// Watch for changes to the DOM tree using a MutationObserver
var observer = new MutationObserver(function(mutations) {
    // Check each mutation for added or removed nodes
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
            // If a node was added, run the script to change the background color
            changeBackgroundColor();
        }
    });
});

// Start observing the target node for changes
var targetNode = document.body;
observer.observe(targetNode, { childList: true, subtree: true });
```
Do i understand any of that ? absolutely not but chatGPT said it works so it should work, right ?

YES it actually works, i just pasted it and it works, im not really intersted on knowing how but i asked him to explain to put it here if anyone wants to know more about Js.

```chatGPT
This code creates a `MutationObserver` object, which is used to watch for changes to the DOM tree.
The `MutationObserver` constructor takes a callback function as its argument,
which will be called whenever a change is detected in the DOM tree.

In this case, the callback function is checking each mutation for added or removed nodes.
If a node was added, it runs the `changeBackgroundColor()` function.

The `MutationObserver` object then starts observing the targetNode, which is set to `document.body`.
The childList option is set to true, which means that the observer will look for changes
to the child nodes of the target node (i.e., new nodes being added or removed).
The subtree option is also set to true, 
which means that the observer will look for changes to all descendant nodes of the target node,
not just its immediate children.
```
## Finally
this was just a fun thing i did out of curiosity and I won't publish it because to make a google dev acc u need 5$ and i've it but whatever i can spend them on somehing better so if u want to use it just clone it and use it.
and if you want to remove the font of the lyrics just uncomment line 25 on the `script.js` file and you are good to go.

