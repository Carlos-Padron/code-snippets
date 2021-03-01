extension Date{
 
  //Converts Date to string with the given format
  func convertToMothYearFormat() -> String{
    let dateFormatter         = DateFormatter()
    dateFormatter.dateFormat  = "MMM yyyy"
        
    return dateFormatter.string(from: self)
  }  
}
