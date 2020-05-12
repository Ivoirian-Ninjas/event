export function duration(start,end ){
    const split_start = start.split(":")
    const time_start =parseFloat( split_start[0])  + parseFloat( (split_start[1] / 60).toFixed(1) )

    const split_end = end.split(":")
    const time_end = parseFloat( split_end[0] ) + parseFloat( (split_end[1] / 60).toFixed(1) )

    return (time_end - time_start)
}