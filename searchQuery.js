// Function that manages querying, sorting, and displaying search results.
function searchvals(input) {
    let pages = []
    // Because this is a proof of concept our results are kind of limited and very static
    pages.push(new page('About', 'about.html', 'Interested in more about us?'))
    pages.push(new page('Stories', 'stories.html', 'Learn about some previous victums and their expierences.'))
    pages.push(new page('Donate', 'donate.html', 'Want to support us?'))
    pages.push(new page('Diagnosis', 'diagnosis.html', 'It is an important term we will use a lot. We believe defining this term would help you explore our website.'))
    pages.push(new page('Contact us', 'contactus.html', 'Have something important to tell us?'))
    pages.push(new page('Home', 'index.html', 'Our home page an important place to start. Albiet, you kinda had to be there to get here.'))
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
        temp += "</a> <br>"
        temp += arr[i].desc
        temp += "</div>"
        ans += temp
        
    }    return ans
}

// Encapsulates page information.
class page {
    constructor(name, src, desc) {
        this.name = name
        this.src = src
        this.desc = desc
        this.likeness = 0 // We use a point deduction system to determine if its the user's element.
    }
}