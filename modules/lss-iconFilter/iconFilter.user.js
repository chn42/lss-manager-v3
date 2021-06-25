(function ($) {
    $('#building_selection_feuerwehr').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAATCAYAAABLN4eXAAAAAXNSR0IArs4c6QAAAVlJREFUKBV9kjFLA0EQhe8SRSEp1ELBzja1iKCgjYUBG4v0kj8g/gdF0M5CEP+CZUCFoCCCNjaxFEyhlahgY0Tj+c1lZjM5TBbevTdv3uzdLRtFA1aSJEvgYECk2yKYBzugDc66nT6KUAHUgK3zPtGOTaoIbiyt/AaPSAIu9GyAMQxOwX+riim9SnZoN5O+cvWv6s0whDELflzoDj3vapN1P+R3/SIxA1Yt6VhOcyrHo8T0Ytghig7jOH6kTn/e+SJzYE0eVal0teFt1e/K38pGZTnGunv9tXXwJoAcwIbri3yQoaYzj21IGD+t4XuX+ZDGpzP2M0PjOlxxmZb805MLTjodcSD2Xyf4Te09y9ClFkLTTgfJsBzQhRoN+bwSaOnrX+F8SDuBv6eZldSmkLtlV2XBZYOkLxegFgwRGOvgBRz1NDq9OfxbUMz2ZHAMbIFR36ReBkPm/QG7e71N3XCDjgAAAABJRU5ErkJggg=='>"
    );

    $('#building_selection_rettung').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAAXNSR0IArs4c6QAAAJxJREFUOBFjZMAB/v//Lw2UMsIifY6RkfEpFnHcQkDDIoAYG4jEpYsJlwQ54iPEMEZgCLMBw2cqljBSBoo5YhHfDxS7i0U8B2QYN1DiCxZJUoV4RkgEUNWbLMBQ/gbE4lhCOxAoNgOLeCZQbB0W8W8swEz7HyjxCl0SGMsf0cWg/I9APRjqQXJU9ebgNQwUAbjAW6DEKSySIHGsAADx7DgoYTMZkgAAAABJRU5ErkJggg=='>"
    );

    $('#building_selection_polizei').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAAAXNSR0IArs4c6QAAAUlJREFUOBGdkrFKA0EURWeCBC1FixRbCWoVsRUUK79ALBNBhPxBCit/IHY2VlYWIijYWIhYWFiJWqhNioAGFCIGtVAw67lhNwzDrCE+OPvmvXfv7uwwNo7jaWPMPuzCJbQgghVYhBrcwAdMQBna1tqKxXxLUYRBo5TDcTqoC30HzmQ+/of5im03ZW7+YW5kzLoemcczBHf01zNmY+rLPJsh2GZrOo/rwLzIQecMjz1I44DFMizAsEzkCJagDI+QxoyGD2lF/oZV/0v0RuAQ3FiT+c3tJOs59wX0dgKaDf1z3hUm6wZiXaD0MF8CmrzMdW/wRF2AC9BLquR78KOubdfAjU+KH7fB+tmrv6gjmQvw6g37lVu9baCch/d+jmR+RB7qmbWgMQnniSCU2jSroHMKB0NdkBPogKIFmzAadgS6iKegBN2bFpCYXxW/pZXahftPAAAAAElFTkSuQmCC'>"
    );

    $('#building_selection_thw').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAYlJREFUOBGNk7tKA1EQhrOixEpQsdDKFNp5gYiFjZVlKq1EIY29F/ApLLWwF+y1sxcUL5UgRgyiSPABDFE06zebvcwO50QHvpz5/5k9e3Z3EhS6RBiGI5SnVEszCIILpf+fstke2Bjy7dDjK8R+yVEfd3h5i9tPwD7MS4V1CRpg4wBjEIpQhZ38Tp2Lzygk8ZYknvUdX5BoQ3SAaFPEirhd4qdLTUpX0COP0wsv4IpzzAWQRxqFbfgAV1STk21R/TQdN+i+qEH94FVMn8h7mEnbEGWQ509iOS2ahAa5URKnJP3SokfjDh2o6x5VbtOaMmoMcku03qyCDlVTdmxlxqmuzXGyziCTBHAENp4wBuw+eBu2Ef0K5aiX5NLRIFYd1mAS5KvKUPvGZDXZTI7qa6L0Z8gIZe8bcRhf0mQ9ga9Yu5ZrzNu48M06m3sdGPJ/24RhKbCW4AFs7GJEp2BdhPXcRj5B4zHYmPb169Fw9dSN2UY/Gy+V2UtLrSzhSEXUWOYUWgxoQ+lc+gvFQMYSTDxEhQAAAABJRU5ErkJggg=='>"
    );

    $('#building_selection_wasserrettung').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAAAXNSR0IArs4c6QAAAgdJREFUOBGtlDtLnEEUhlc0KEKW4AU0xHuCiJtATLE2yxbRRks7LS0sxNIuP0FSWNktNikiWFgGBJsQ1KQS8YYGRBNFCdFEvCWuz1l8l9nZ+TBFDjycM+9555vvNhOLBSKbzSbgFZQF2gUSnnJIwrOCRmiA6TF8BMUaxfOQ1zR6adgFxRxFPOin0Qo7cjr5B3XSn4TWD+eOT+UXipoCP0I77MkRyKdoKU2iHoCrgE/SKkVdzk/xBk7UIV9DBibhNyguKaZhBv5KJB/DBLyHG1AcUozYe1yWQr6AfudOuxjbBaLiK40Wxz/M2F181hb4DBZ2t69lVkZLwDfwYx3hiXzKaINgb8Eiv8AWg6IP6Uxqo79kM+7iA7lWfT/T64N9yC3QRFHqm/wxnhJ4Ck1+LzTG9wCKnjDk/f8aK9dD879cGZ+erPpeP+YqmAPFJ4rWqIn07C+zf97CftEMVAT9NOpgBfywj9XpT0JLgbt/NG+B4mGBH6EBNuUI5CO0l5pE3QNnAZ+kRYpHOT/FGByoQ7ZHtdf0Dtzj4BfjtzAFtqsVtn8yMC/hLm+TB92NZvofGHLuNM3YLhwVdmMJxz/uGfMbzXS7qwGZldG6wU5UP+yYbpdPGW0UdCblF/iO2CuTn+m9gA1Q2PnV6Ps0pmfHxU/ILWCTK9WMynhsZ9rT2K9ZEuWTjicOHbd/jdZAjPTzRAAAAABJRU5ErkJggg=='>"
    );

    $('#building_selection_schule').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAAAXNSR0IArs4c6QAAAa5JREFUOBGt1M8rBGEYwPEd1oYoDmrbg9Zpb3ux5bDi6kCJ9sBpQ4ocnIh/QIvkILngIgflwMXJcRPZg4MiKW5Wmx8RtX6M72Pn3Z2ZjB3Zpz77vs+87/v0vm+z4/G4DF3XaxBwOb34NIpFsYZnfGAPMfiKr7bNYJEfkziHU2QYWETYttyaMsGLbuziDfa45UHa/tDIj2lHUJevShLAHJwWHTHWBx8S+C1eGdxAxMNPDx5hjk+SHbSjEoM4gZuQ0ya+d06nGsOQggeIoB5TuIGbOGPSBPz565AOD/qRguwwhAsUiycmrCJqKWZOGNzCEFrRhHJ0YhtZmCNJMgB5t2sRN9ey9BmUO2yBXL5cyT7kFHKCBoxjBiFZSNuGdcj7nbUUUwkDXZAYgxQ3xx3JEpohJ5mG/ZocC0tBiQVjN5lc6vrXsbC8oy+Q+22E/HX/Eil1etWWGZ0gbRXkVUljE24jycTYj5PZ2qixvbiaQB7GPA7xABVy56dYQQfU5tTSXMtABS4h0WsdLWSMybfE/ReNybOQeEewUOp/PS/Lr3GPZU3TrmhLF+xUK121XKUvDRtFdTmoOUgAAAAASUVORK5CYII='>"
    );

    $('#building_selection_leitstelle').html(
        "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAAAXNSR0IArs4c6QAAAeVJREFUOBF1kz1LXFEQhveKX2lEFEFSpJAgIhIiiEGjIpIuhW5IEwJioZAqpWDhD7DRQv9A0EIM2AREhISNpgv4gVqENIEVkviBqSzUeHzes3MuZ3V34Lkz886c2XvOnpvJROaca4/SkiE9TVBTrjhF8QIelWwwkfoifIX6oj6ELMjO4WlRMUqoJbAJsk9piaQOTuAaelXAV6UNFqBpQCXUwjbIxnyZ4J1PnZuXQNwN674YPdDewoL1PCGW7foWgi8+da4NXwVHcAMt0QwN3wDZiA0K22pVMQ/nVhhQF7ZieQfxqMUvfMW5JctnLH9ZgdAExypgjQWX2TE/i/9As94qaKEnXaMhf6CZxgT/Ay5hmbwa3weyoSRJzvAb8FMC9rDgMr+1nY8gey4R/8Z8v1cLj7AFHXoX6J86gCto1KJXINsCvY034mmJZkdBl0ebMH0tNGvqdxOHQzP5Z9O+mX9sAyrI/8J/6Az9mtwOv6DBGquJ9Qnold+DbDwsIJ6DyZCnHjH9FojDeSwQh4vlz8V+pDZdWC5gYTiP18Ta7inky/WX1FkQzkN3SNtdBZk/l7uLdE+KjEbdjx445G6cWDFnftB8kbs3hOozeAA5CJazYDAIsa+ME4u19yzsRbV90/5FWhreAiWS+QZ0GulFAAAAAElFTkSuQmCC'>"
    );
})($);
