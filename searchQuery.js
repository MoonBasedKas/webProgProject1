function searchvals(input) {
    let pages = []
    // Because this is a proof of concept our results are kind of limited and very static
    pages.push(new page('about', 'about.html'))
    pages.push(new page('stories', 'stories.html'))
    pages.push(new page('donate', 'donate.html'))
    pages.push(new page('diagnosis', 'diagnosis.html'))
    pages.push(new page('contact us', 'contactus.html'))
    pages.push(new page('home', 'index.html'))
    console.log(input.length)
    console.log(pages.length)

    pages = getLikeness(pages, input)
    
    pages = sortPages(pages)
    console.log(pages.length)
    results.innerHTML = ""
    results.innerHTML = displayPages(pages)
}

// Determines how close the users search query is to the options.
function getLikeness(arr, input) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (arr[i].name[j] != input[j]) {
                // Removes points if there are different keys.
                arr[i].likeness -= 1;
            }
            // Removes additional points if the lengths are different.
            // arr[i].likeness -= Math.abs(input.length - arr[i].likeness.length)
        }

    }
    return arr;
}

//Selection sort because do we really need speed for 6 results?
function sortPages(arr) {
    let temp = null
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].likeness < arr[j].likeness) {
                max = j
            }
        }
        temp = arr[i]
        arr[i] = arr[max]
        arr[max] = temp

    }
    return arr;

}

function displayPages(arr) {
    let ans = ''
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        temp = "<div> <a href='"
        temp += arr[i].src
        temp += "'>"
        temp += arr[i].name
        temp += "</a> </div>"
        ans += temp
        console.log(temp)
        
    }
    // console.log(ans)
    return ans
}

// Encapsulates page information.
class page {
    constructor(name, src) {
        this.name = name
        this.src = src
        this.likeness = 0 // We use a point deduction system to determine if its the user's element.
    }
}