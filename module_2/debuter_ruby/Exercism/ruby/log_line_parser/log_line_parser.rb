class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    @line.split(':')[1].strip
  end

  def log_level
    @line.split(':')[0].gsub(/[\[\]\r\n]/, '').strip.downcase
  end

  def reformat
    "#{message} (#{log_level})"
  end
end

puts LogLineParser.new("[WARNING]:  Disk almost full\r\n").message
puts LogLineParser.new("[WARNING]:  Disk almost full\r\n").log_level
puts LogLineParser.new("[WARNING]:  Disk almost full\r\n").reformat

